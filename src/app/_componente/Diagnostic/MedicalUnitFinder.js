import { useState, useEffect } from 'react';

const MedicalUnitFinder = ({ medicalUnits, selectedSpecializations }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getUserLocation();
        setUserLocation(location);
      } catch (err) {
        setError(err);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      const closestUnits = findClosestMedicalUnits(userLocation, selectedSpecializations, medicalUnits);
      setResults(closestUnits);
    }
  }, [userLocation, selectedSpecializations, medicalUnits]);

  if (error) return <p>Error: {error}</p>;
  if (!userLocation) return <p>Fetching your location...</p>;

  return (
    <div>
      <h4 style={{textShadow: `6px 6px 4px rgba(0, 0, 0, 0.75)`}}>Unităţi Medicale din apropierea ta (15km):</h4>
      {results.map(({ specialization, closestUnits }) => (
        <div key={specialization}>
          <p>{specialization.charAt(0).toUpperCase() + specialization.slice(1)}:</p>
          <ul>
            {closestUnits.map((unit) => (
              <li key={unit.Unitate}>
                <p>{unit.Unitate} ({unit.distance.toFixed(2)} km)</p>
                <a href={generateGoogleMapsLink(unit.latitude, unit.longitude)} target="_blank" rel="noopener noreferrer">
                  Indicaţii Maps
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MedicalUnitFinder;

// Helper functions
const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by your browser");
    }
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error.message)
    );
  });
};

const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Radius of Earth in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const findClosestMedicalUnits = (userLocation, specializations, units) => {
  const results = specializations.map((specialization) => {
    // Filter units that have the requested specialization
    const unitsWithSpecialization = units
      .filter((unit) => unit[specialization] === 1)
      .map((unit) => ({
        ...unit,
        distance: haversineDistance(
          userLocation.latitude,
          userLocation.longitude,
          unit.latitude,
          unit.longitude
        ),
        specializationCount: Object.values(unit).filter((val) => val === 1).length, // Count total specializations
      }));

    // Separate units based on specialization count
    const specificSpecializationUnits = unitsWithSpecialization.filter((unit) => unit.specializationCount === 1);
    const multipleSpecializationUnits = unitsWithSpecialization.filter((unit) => unit.specializationCount > 1);

    // Sort both groups by distance
    specificSpecializationUnits.sort((a, b) => a.distance - b.distance);
    multipleSpecializationUnits.sort((a, b) => a.distance - b.distance);

    // Prioritize units within 15km
    const prioritizedUnits = specificSpecializationUnits.filter((unit) => unit.distance <= 15);

    // Add more units if fewer than 2 prioritized units are found
    while (prioritizedUnits.length < 2 && multipleSpecializationUnits.length > 0) {
      prioritizedUnits.push(multipleSpecializationUnits.shift());
    }

    // Ensure only the top 2 units are returned
    return {
      specialization,
      closestUnits: prioritizedUnits.slice(0, 2),
    };
  });

  return results;
};


const generateGoogleMapsLink = (latitude, longitude) => {
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
};
