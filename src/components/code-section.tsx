"use client"

import Code from './code'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

const codeBlock = `const res = await fetch('https://safeword-api.jejesavewords.workers.dev/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message }),
})`

const CodeSection = () => {
  return (
    <ScrollArea className='relative'>
      <Code code={codeBlock} />

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default CodeSection
