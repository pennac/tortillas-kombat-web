import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                amber: {
                    500: '#E3B659',
                    800: '#92400e',
                    900: '#78350f',
                    950: '#451a03',
                },
                red: {
                    800: '#991b1b', // Actions
                },
                zinc: {
                    950: '#09090b', // Dark Sepia
                }
            },
            fontFamily: {
                header: ['Cinzel', 'serif'],
                body: ['Lora', 'serif'],
            }
        }
    }
}
