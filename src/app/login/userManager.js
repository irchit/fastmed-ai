import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const secretKey = "sorartSecretKey";
const key = new TextEncoder().encode(secretKey);
const url = "http://localhost:8080/utilizator/username"

export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("100000 sec from now")
    .sign(key);
}

export async function decrypt(input) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

const fetchUser = async (username) => {
    try {
        const response = await axios.get(url + '/' + username);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return false;
    }
}

export async function register(formData){
        if (!formData.get("nume") || !formData.get("prenume") || !formData.get("username") || !formData.get("password") || !formData.get("gen"))
        {
            return;
        }

        const foundUser = await fetchUser(formData.get("username"));
        if (foundUser) return;

        const user = {
          nume: formData.get("nume"),
          prenume: formData.get("prenume"),
          nume_utilizator: formData.get("username"),
          parola: formData.get("password"),
          gen: formData.get("gen"),
        }

        try {
          const response = await axios.post('http://localhost:8080/utilizator', user);
          return await login(formData);

      } catch (error) {
          console.error('Error adding user:', error);
      }

}

export async function login(formData) {
  // Verify credentials && get the user

    const foundUser = await fetchUser(formData.get("username"));

    if (!foundUser)
    {
        return "invalid data";
    } 

    if (foundUser.password !== formData.get("password"))
    {
        return "invalid data";
    }

  // Create the session
  const expires = new Date(Date.now() + 100000 * 1000);
  const session = await encrypt({ foundUser, expires });

  // Save the session in a cookie
  cookies().set("sessionUser", session, { expires, httpOnly: true });
  
  return "loggedin";
}

export async function logout() {
  // Destroy the session
  cookies().set("sessionUser", "", { expires: new Date(0) });
}

export async function getSession() {
    const cookiesList = await cookies(); // Await the cookies() function
    const session = cookiesList.get('sessionUser')?.value; 
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request) {
    const cookiesList = await cookies(); // Await the cookies() function
    const session = cookiesList.get('sessionUser')?.value; 
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 100000 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "sessionUser",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}