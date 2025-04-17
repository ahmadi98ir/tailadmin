import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { promises as fsPromises } from 'fs';

// تابع API برای سرو فایل‌های استاتیک از پوشه public
export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const pathSegments = params.path || [];
    
    // ایجاد مسیر به فایل استاتیک
    const filePath = path.join(process.cwd(), 'public', ...pathSegments);
    
    // چک کردن وجود فایل
    if (!fs.existsSync(filePath)) {
      return new NextResponse('File not found', { status: 404 });
    }
    
    // خواندن فایل به صورت باینری
    const fileBuffer = await fsPromises.readFile(filePath);
    
    // تشخیص نوع محتوا
    let contentType = 'application/octet-stream';
    
    if (filePath.endsWith('.svg')) {
      contentType = 'image/svg+xml';
    } else if (filePath.endsWith('.png')) {
      contentType = 'image/png';
    } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
      contentType = 'image/jpeg';
    } else if (filePath.endsWith('.mp3')) {
      contentType = 'audio/mpeg';
    }
    
    // برگرداندن فایل
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error serving static file:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 