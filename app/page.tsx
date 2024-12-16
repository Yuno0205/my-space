// 'use client';
// import * as React from 'react';
// import Link from 'next/link';
// import { Menu, Search, Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { Input } from '@/components/ui/input';
// import TypeWriter from '@/components/TypeWriter';
// // import { useTheme } from 'next-themes';

// export default function Header() {
//   // const { setTheme, theme } = useTheme();
//   const [isScrolled, setIsScrolled] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="flex w-full flex-col">
//       <header
//         className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
//           isScrolled ? 'border-b border-border/40' : 'border-transparent'
//         }`}
//       >
//         <div className="container flex h-16 items-center">
//           <div className="mr-4 hidden md:flex">
//             <Link className="mr-6 flex items-center space-x-2" href="/">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="-11.5 -10.23174 23 20.46348"
//                 className="h-8 w-8 text-[#61dafb]"
//               >
//                 <circle cx="0" cy="0" r="2.05" fill="currentColor" />
//                 <g stroke="currentColor" strokeWidth="1" fill="none">
//                   <ellipse rx="11" ry="4.2" />
//                   <ellipse rx="11" ry="4.2" transform="rotate(60)" />
//                   <ellipse rx="11" ry="4.2" transform="rotate(120)" />
//                 </g>
//               </svg>
//               <span className="hidden font-bold sm:inline-block">React</span>
//             </Link>
//             <nav className="flex items-center space-x-6 text-sm font-medium">
//               <Link
//                 href="/learn"
//                 className="transition-colors hover:text-foreground/80 text-foreground/60"
//               >
//                 Learn
//               </Link>
//               <Link
//                 href="/reference"
//                 className="transition-colors hover:text-foreground/80 text-foreground/60"
//               >
//                 Reference
//               </Link>
//               <Link
//                 href="/community"
//                 className="transition-colors hover:text-foreground/80 text-foreground/60"
//               >
//                 Community
//               </Link>
//               <Link
//                 href="/blogs"
//                 className="transition-colors hover:text-foreground/80 text-foreground/60"
//               >
//                 Blog
//               </Link>
//             </nav>
//           </div>
//           <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
//             <div className="w-full flex-1 md:w-auto md:flex-none">
//               <form className="relative">
//                 <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   type="search"
//                   placeholder="Search"
//                   className="pl-8 md:w-[200px] lg:w-[300px] bg-background"
//                 />
//               </form>
//             </div>
//             <nav className="flex items-center">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 aria-label="Toggle Theme"
//                 className="mr-6"
//                 // onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//               >
//                 <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                 <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                 <span className="sr-only">Toggle Theme</span>
//               </Button>
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="ghost" size="icon" className="md:hidden">
//                     <Menu className="h-5 w-5" />
//                     <span className="sr-only">Toggle Menu</span>
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end">
//                   <DropdownMenuItem>
//                     <Link href="/learn">Learn</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Link href="/reference">Reference</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Link href="/community">Community</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Link href="/blog">Blog</Link>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </nav>
//           </div>
//         </div>
//       </header>
//       <TypeWriter />
//     </div>
//   );
// }

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Search,
  Plus,
  BookOpen,
  Zap,
  Trophy,
  MoreHorizontal,
} from 'lucide-react';

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Quizlet
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link
                href="#"
                className="text-sm font-medium hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-blue-600"
              >
                Your Library
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-blue-600"
              >
                Solutions
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Upgrade
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">
              Learn it. Own it. Quizlet.
            </h1>
            <div className="max-w-2xl relative">
              <Input
                type="search"
                placeholder="Search for study sets, textbooks, questions"
                className="w-full pl-10 pr-4 py-2 rounded-full text-black"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Your study sets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((set) => (
                <Card key={set}>
                  <CardHeader>
                    <CardTitle>Biology Chapter {set}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">24 terms</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      Study
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Create a new study set
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Study modes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                    Flashcards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Review your material with interactive flashcards
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Start</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                    Learn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Master your material with adaptive learning
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Start</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="mr-2 h-5 w-5 text-green-500" />
                    Test
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Challenge yourself with practice tests
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Start</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-2">Features</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#">Flashcards</Link>
                </li>
                <li>
                  <Link href="#">Learn</Link>
                </li>
                <li>
                  <Link href="#">Solutions</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#">Help Center</Link>
                </li>
                <li>
                  <Link href="#">Privacy</Link>
                </li>
                <li>
                  <Link href="#">Terms</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#">Company</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Follow us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#">Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
