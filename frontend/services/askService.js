import axios from "axios";

export async function sendQuestion(question) {
  console.log("Server URL:", process.env.NEXT_PUBLIC_SERVER_URL);
  console.log("All environment variables:", process.env);

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/ask`,
      {
        question,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log("Response from server:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending question to server:", error);
    return null;
  }
}
