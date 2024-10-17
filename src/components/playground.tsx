'use client'

import { useState } from 'react'
import { checkProfanity } from '@/actions'
import { useMutation } from '@tanstack/react-query'
import { Button } from './ui/button'
import { Input } from './ui/input'

const PlayGround = () => {
  const [message, setMessage] = useState<string>(
    'this is definitely not a swear word'
  )

  const { data, mutate, isPending, error } = useMutation({
    mutationKey: ['check-profanity'],
    mutationFn: checkProfanity,
    onSettled: (data) => {
      if (data && 'error' in data) {
        throw new Error(data.error)
      }
    },
  })

  const successData = data && !('error' in data) ? data : undefined

  return (
    <div className='flex flex-col gap-5 items-center'>
      <div className='relative w-full rounded-xl mt-12 bg-gray-900/5 p-4 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <span className='inline-flex items-center rounded-md bg-zinc-700 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-blue-400/20'>
              POST
            </span>
            <div className='h-[20px] w-px bg-zinc-300' />
            <p className='break-all'>https://safeword-api.jejesavewords.workers.dev/</p>
          </div>
        </div>
        <div className='relative flex flex-col sm:flex-row items-center gap-2 mt-6 h-full sm:h-9'>
          <Input
            className='bg-white h-9'
            value={message}
            onKeyDown={(e) => {
              if (e.key === 'Enter') mutate({ message })
            }}
            onChange={({ target }) => {
              setMessage(target.value)
            }}
          />
          <Button
            disabled={isPending}
            className='h-9 w-full sm:w-fit'
            onClick={() => mutate({ message })}>
            Verificar com Texto Certo API
          </Button>
        </div>

        <div className='h-32 mt-4 rounded-lg border-2 border-dashed border-zinc-300 text-sm flex items-center justify-center'>
          {successData ? (
            <div className='flex flex-col items-center text-center'>
              <p className='font-bold'>
                {successData.pontuacao > 0.95 ? (
                  <span>
                    🚨🚨😱😱 OWN MEU DEUS, ESSE TEXTO JAMAIS TEM QUE SAIR DAQUI!! 🚨🚨😱😱{' '}
                  </span>
                ) : successData.pontuacao > 0.9 ? (
                  <span>🚨😱 ALGO MUITO PROFANOSO FOI INDENTIFICADO!! 🚨😱 </span>
                ) : successData.pontuacao > 0.88 ? (
                  <span>🚨 ACHAMOS ALGO MUITO SUSPEITO NESSE TEXTO!! 🚨 </span>
                ) : successData.pontuacao >= 0.85 ? (
                  <span>😱 TENHO QUASE CERTEZA QUE ACHAMOS ALGO DE RUIM AQUI 😱</span>
                ) : successData.pontuacao < 0.85 ? (
                  <span>Que texto lindo e sem profanações, pode passar :)) 👍👍</span>
                ) : null}
              </p>

              <p className='text-sm text-zinc-700'>
                pontuação (mais alto é pior): {successData.pontuacao.toFixed(3)}
              </p>
            </div>
          ) : (
            <p className='text-zinc-700'>Os resultados serão apresentados aqui</p>
          )}
        </div>

        {error ? (
          <p className='text-red-600 text-sm mt-2'>
            <span className='font-semibold'>Error:</span> {error.message}
          </p>
        ) : null}
      </div>

      <div className='text-sm flex gap-2 items-center h-fit'>
        powered by um dev da GLOBE
      </div>
    </div>
  )
}

export default PlayGround
