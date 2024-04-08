import { NextRequest, NextResponse } from 'next/server';

export async function POST(Request: NextRequest) {
  return NextResponse.json({ message: 'Example' });
}