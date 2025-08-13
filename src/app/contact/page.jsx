'use client'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    })

    const onSubmit = async (data) => {
        console.log('Form data:', data)

        // Simulate form submission delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        alert('Your message has been sent!')
        reset()
    }

    return (
        <>
            <Head>
                <title>Contact Us | ForgeryShield</title>
            </Head>
            <div className="relative bg-[#3A3A3F]">
                <div className="mx-auto flex h-3 items-center justify-center"></div>
            </div>
            <div className="w-full max-w-8xl mx-auto pl-6 pr-6 md:pl-18 md:pr-18">
                <Header />
            </div>

            <main className="min-h-screen bg-[#F3F4F6]  text-white flex items-center justify-center px-4 py-12">
                <div className="max-w-2xl w-full p-8 bg-gray-900 rounded-2xl shadow-2xl">
                    <h1 className="text-3xl font-bold mb-3">Get in Touch</h1>
                    <p className="mb-6 text-gray-400">
                        Have a question or interested in learning more about our anti-counterfeit technology? We'd be happy to assist you — send us a message.                   </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                {...register('name')}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                {...register('email')}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                {...register('message')}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-200 rounded-md font-semibold text-white shadow-md disabled:opacity-50"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />

        </>
    )
}
