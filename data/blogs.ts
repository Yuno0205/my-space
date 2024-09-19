// data/blogs.ts
export interface ContentBlock {
  type: 'text' | 'image' | 'title';
  content: any;
}

export interface BlogPost {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Exploring the Beauty of Nature',
    blocks: [
      { type: 'title', content: 'The Majesty of Mountains' },
      {
        type: 'text',
        content:
          'Mountains have always been a source of inspiration, offering breathtaking views and a sense of peace and tranquility. They are symbols of strength and resilience, standing tall against the test of time.',
      },
      {
        type: 'image',
        content: {
          src: '@/public/images/1696065152678.png',
          alt: 'Beautiful Mountain Range',
        },
      },
      {
        type: 'text',
        content:
          'The allure of mountains is not just in their height but also in the diverse ecosystems they support, from lush forests to alpine meadows. Each peak tells a story of geological transformation and natural beauty.',
      },
      {
        type: 'image',
        content: {
          src: '@/public/images/1696065152678.png',
          alt: 'Sunset Over the Peaks',
        },
      },
      {
        type: 'text',
        content:
          'Hiking through mountainous terrain can be a challenging yet rewarding experience, offering stunning vistas that are rarely seen by those who stay in the valleys below. The journey up is often filled with moments of reflection and awe.',
      },
      {
        type: 'image',
        content: {
          src: '@/public/images/1696065152678.png',
          alt: 'Snow-Capped Summit',
        },
      },
      {
        type: 'text',
        content:
          'Whether covered in snow or bathed in the warm glow of the sun, mountains evoke a sense of wonder that transcends cultures and generations.',
      },
    ],
  },
  {
    id: '2',
    title: 'The Magic of Ocean Waves',
    blocks: [
      { type: 'title', content: 'The Power and Grace of the Sea' },
      {
        type: 'text',
        content:
          'Oceans cover over 70% of the Earth’s surface, providing a home to millions of species and playing a crucial role in our planet’s ecosystem. The rhythmic crashing of waves is both powerful and soothing.',
      },
      {
        type: 'image',
        content: { src: '/images/ocean1.jpg', alt: 'Waves Crashing on Rocks' },
      },
      {
        type: 'text',
        content:
          'The ocean’s vastness is both humbling and inspiring. From tranquil beaches to raging storms, the sea has the ability to evoke a wide range of emotions.',
      },
      {
        type: 'image',
        content: { src: '/images/ocean2.jpg', alt: 'Calm Ocean at Dusk' },
      },
      {
        type: 'text',
        content:
          'Surfers chase the perfect wave, sailors navigate its vast expanses, and marine life thrives in its depths. Each wave carries the story of the wind and tides that shaped it.',
      },
      {
        type: 'image',
        content: { src: '/images/ocean3.jpg', alt: 'Sunrise Over the Ocean' },
      },
      {
        type: 'text',
        content:
          'The sea’s ever-changing nature is a reminder of the constant ebb and flow of life, urging us to find balance and peace within its embrace.',
      },
    ],
  },
];
