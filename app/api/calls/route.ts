import {  NextRequest, NextResponse } from 'next/server';

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone_ext: string;
  phone: string;
}


export async function POST(
  req: NextRequest
) {
  try {
    const body = await req.json() as FormData;
    const { firstname, lastname, email, phone_ext,  phone } = body;

    if (!firstname || !phone || !email || !phone_ext || !lastname) {
      return NextResponse.json(
        { message: 'All fields are required.', status: 400  },
        { status: 400 }
      );
    }

    //call the VAPI public url with the token and get the response
    console.log(process.env.SERVER_URL);
    const response = await fetch(`${process.env.SERVER_URL}/api/create_new_vapi_call`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        phone,
        email,
        phone_ext
      }),
    });
    const data = await response.json();

    return NextResponse.json(
      { message: 'Form submitted successfully!', response: data, status: 200 },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { message: 'An error occurred.' },
      { status: 500 },
    );
  }
}