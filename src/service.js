export async function fetchLogin(payload) {
    try {
        const response = await fetch("http://localhost:3001/user/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json"},
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error fetching ", error);
        throw error;
    }
}

export async function fetchSignup(payload) { 
    try {
      const response = await fetch("", {
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

export async function fetchProfile(token) {
  try {
    const response = await fetch("", {
      method: "POST",
        headers: {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + token,
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching ", error);
    throw error;
  }
}

export async function fetchEditProfile(token,payload) {
  try {
    const response = await fetch("", {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching ", error);
    throw error;
  }
}