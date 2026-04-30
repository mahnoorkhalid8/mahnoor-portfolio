import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    const messagesFile = path.join(dataDir, 'messages.json');

    // Read existing messages or create empty array
    let messages = [];
    if (existsSync(messagesFile)) {
      const fileContent = await readFile(messagesFile, 'utf-8');
      messages = JSON.parse(fileContent);
    }

    // Add new message with timestamp
    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      read: false,
    };

    messages.push(newMessage);

    // Save to file
    await writeFile(messagesFile, JSON.stringify(messages, null, 2));

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messagesFile = path.join(process.cwd(), 'data', 'messages.json');

    if (!existsSync(messagesFile)) {
      return NextResponse.json({ messages: [] }, { status: 200 });
    }

    const fileContent = await readFile(messagesFile, 'utf-8');
    const messages = JSON.parse(fileContent);

    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    console.error('Error reading messages:', error);
    return NextResponse.json(
      { error: 'Failed to read messages' },
      { status: 500 }
    );
  }
}
