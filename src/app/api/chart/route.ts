import { NextRequest, NextResponse } from 'next/server';
import { chartData } from '../../line-chart/line-chart-mock-data';

export async function GET(request: NextRequest) {
  return NextResponse.json(chartData, { status: 200 });
}
