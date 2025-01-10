import {  NextRequest, NextResponse } from 'next/server';

interface FormData {
  firstname: string;
  phone: string;
}


export async function POST(
  req: NextRequest
) {
  try {
    const body = await req.json() as FormData;
    const { firstname, phone } = body;

    console.log("data", body);

    if (!firstname || !phone) {
      return NextResponse.json(
        { message: 'Name and phone are required.' },
        { status: 400 }
      );
    }

    //call the VAPI public url with the token and get the response
    
    // Mock form processing (e.g., save to database, send email, etc.)
    console.log(`Form submitted: Name: ${name}, Phone: ${phone}`);

    return NextResponse.json(
      { message: 'Form submitted successfully!', formData: { name, phone } },
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