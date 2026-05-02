import {redirect} from 'next/navigation';

// Root path'i default locale'e yönlendir
export default function RootPage() {
  redirect('/en');
}
