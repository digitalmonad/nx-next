import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json(
    { firstName: 'Neil', lastName: 'Maverick' },
    { status: 200 },
  );
}
