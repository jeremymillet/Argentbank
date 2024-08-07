
export async function fetchPostLogin(payload) {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL_API}/user/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching ", error);
    throw error;
  }
}

export async function fetchPostSignup(payload) {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL_API}/user/login`, {
      method: "POST",
      body: payload,
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching ", error);
    throw error;
  }
}

export async function fetchPostProfile(token) {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL_API}/user/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching ", error);
    throw error;
  }
}

export async function fetchUpdateProfile(payload,token) {
  console.log(payload);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL_API}/user/profile`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching ", error);
    throw error;
  }
}
