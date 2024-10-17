/* eslint-disable @next/next/no-img-element */
import CodeSection from '@/components/code-section'
import { Icons } from '@/components/icons'
import PlayGround from '@/components/playground'
import { redis } from '@/lib/redis'
import { cn } from '@/lib/utils'
import { Check, Star } from 'lucide-react'
import localFont from 'next/font/local'

const fontScary = localFont({
  src: '../assets/Scary.ttf',
})

export default async function Home() {
  const requests = await redis.get('served-requests')
  return (
    <div className='bg-blue-50 grainy-light'>
      <div className='relative overflow-hidden'>
        <div className='mx-auto max-w-7xl pb-24 pt-10 sm:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-8 lg:px-8 lg:pt-32 lg:pb-52'>
          <div className='px-6 lg:px-0 lg:pt-4'>
            <div className='mx-auto max-w-lg text-center sm:text-left flex flex-col items-center lg:items-start'>
              <h1
                className={cn(
                  'relative tracking-tight sm:text-left mt-10 font-bold !leading-[4rem] text-gray-900 text-5xl md:text-7xl'
                )}>
                <span className='whitespace-nowrap'>
                 Text
                  <span className='relative'>
                    o
                    <span className='absolute -left-4 -right-4 translate-x-[15px] md:translate-x-[3px] md:-top-1.5'>
                      <img
                        alt='swaer-emoji'
                        src='/swear-emoji.png'
                        className='h-5 w-5 object-contain md:h-8 md:w-12'
                      />
                    </span>
                  </span>
                  Certo
                </span>
                API
              </h1>
              <p className='mt-8 text-lg lg:pr-10 text-center lg:text-left text-balance md:text-wrap'>
              A detecção de conteúdo tóxico sempre foi{' '}
                <span
                  className={cn(
                    'font-scary font-bold text-red-500',
                    fontScary.className
                  )}>
                  lento
                </span>{' '}
                e{' '}
                <span
                  className={cn(
                    'font-scary font-bold text-red-500',
                    fontScary.className
                  )}>
                  caro
                </span>
                . Não mais. Apresentando um software rápido, gratuito e de código aberto
                filtro de palavrões para seus aplicativos da web.
              </p>

              <ul className='mt-8 space-y-2 font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-red-500' /> Muito
                    mais rápido e mais barato de executar do que IA
                  </li>
                  <li className='flex gap-1.5 items-center'>
                    <Check className='h-5 w-5 shrink-0 text-red-500' /> Bastante preciso
                  </li>
                  <li className='flex gap-1.5 items-center'>
                    <Check className='h-5 w-5 shrink-0 text-red-500' /> 100%
                    gratis & codigo aberto
                  </li>
                </div>
              </ul>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-red-500 fill-red-500' />
                    <Star className='h-4 w-4 text-red-500 fill-red-500' />
                    <Star className='h-4 w-4 text-red-500 fill-red-500' />
                    <Star className='h-4 w-4 text-red-500 fill-red-500' />
                    <Star className='h-4 w-4 text-red-500 fill-red-500' />
                  </div>

                  <p className=''>
                    <span className='font-semibold'>
                      {(Math.ceil(Number(requests) / 10) * 10).toLocaleString()}
                    </span>{' '}
                    Requisições feitas para API{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='relative px-8 sm:px-16 md:px-0 mt-28 md:mx-auto md:max-w-xl w-full lg:mx-0 lg:mt-20'>
            <img
              alt='tente utilizar'
              aria-hidden='true'
              src='/try-it.png'
              className='absolute w-40 left-2/3 -top-2 select-none hidden sm:block'
            />
            <PlayGround />
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>

      <section className='bg-blue-100 grainy-dark px-4'>
        <div className='mx-auto max-w-6xl gap-6 pb-24 pt-20 sm:pb-32 lg:gap-x-8 lg:px-8 lg:py-40'>
          <div className='w-full flex flex-col'>
            <div className='flex justify-center text-center'>
              <h2 className='font-heading text-5xl lg:text-6xl font-bold leading-tight text-balance sm:leading-none tracking-tight'>
                &quot;Discurso de ódio{' '}
                <span className='bg-red-500 text-white font-scary px-3'>
                  m@#rda!
                </span>{' '}
                é um saco&quot;
              </h2>
            </div>

            {/* <Icons.arrow className='h-60 -mt-4 text-zinc-400 fill-zinc-400 pointer-events-none select-none' /> */}

            <p></p>

            <p className='text-center mx-auto mt-12 text-lg max-w-xl text-balance'>
              <span className='font-semibold'>
               Moderar palavrões é um trabalho ingrato.
              </span>{' '}
              Se você gerencia um aplicativo web com qualquer tipo de conteúdo gerado por usuários, é sua responsabilidade manter as coisas em ordem. Isso se torna um desafio quando seus usuários soltam palavrões como se fossem confetes em festa de aniversário infantil.
            </p>

            <Icons.arrow className='h-60 -mt-4 text-zinc-400 fill-zinc-400 pointer-events-none select-none' />

            <p className='mt-6 sm:mt-12 z-10 text-center mx-auto text-3xl font-semibold'>
             Palavrões no seu site...
            </p>

            <div className='grid gap-40 sm:grid-cols-2 sm:gap-16 max-w-3xl mx-auto mt-40 text-center'>
              <div className='relative z-10'>
                <div className='absolute -z-10 left-1/2 -translate-x-1/2 -top-[90px]'>
                  <div className='absolute inset-x-0 -bottom-0 h-16 bg-gradient-to-t 0 from-blue-100 pointer-events-none'></div>
                  <img
                    alt='shocked-emoji'
                    src='/shocked-emoji.png'
                    className='h-24 relative -z-10 select-none'
                  />
                </div>
                <p className='font-semibold text-lg'>
                 ...afastam novos visitantes.
                </p>
                <p className='mt-2 text-balance'>
                Imagine seu cliente ideal tentando atravessar um campo minado de palavrões para encontrar seu produto incrível. Não é exatamente a receita perfeita para conversão, certo?
                </p>
              </div>

              <div className='relative z-10'>
                <div className='absolute -z-10 left-1/2 -translate-x-1/2 -top-[90px]'>
                  <div className='absolute inset-x-0 -bottom-0 h-16 bg-gradient-to-t from-blue-100 pointer-events-none'></div>
                  <img
                    alt='swear-emoji'
                    src='/swear-emoji.png'
                    className='relative -z-10 h-24 select-none'
                  />
                </div>
                <p className='font-semibold text-lg'>...faz você parecer mal.</p>
                <p className='mt-2 text-balance'>
                Sua doce avó quer ver o que o netinho está fazendo na internet e acaba tropeçando no seu site. Você realmente quer que ela precise vestir uma{' '}
                  <span className='font-semibold text-red-600'>
                   roupa de proteção
                  </span>{' '}
                  antes?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='video-demo' className='bg-blue-50 grainy-light'>
        <div className='mx-auto max-w-6xl gap-6 pb-24 pt-10 sm:pb-32 lg:gap-x-8 lg:px-8 lg:py-40'>
          <h2 className='mx-auto text-balance text-5xl sm:text-6xl text-center font-bold leading-[4.25rem] tracking-tight max-w-2xl text-slate-900'>
            Há uma maneira <span className='px-2 bg-red-500 text-white'>muito</span>{' '}
            melhor
          </h2>

          <p className='text-center mx-auto mt-12 text-lg max-w-xl text-balance'>
            <span className='font-semibold'>
             Chega de moderar conteúdo manualmente!
            </span>{' '}
            Deixe o Texto Certo API fazer o trabalho sujo de manter a entrada dos seus usuários limpa.
          </p>

          <div
            id='api'
            className='w-full flex flex-col items-center mt-12 px-4'>
            <p className='font-bold text-xl my-4'>Make an API request</p>
            <div className='relative max-w-2xl w-full text-left p-5 bg-[#1e1e1e] rounded-xl shadow'>
              <CodeSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
