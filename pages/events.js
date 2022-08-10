import { useRouter } from "next/router";

export default function Events() {
  const { locale } = useRouter();
  return (
    <h1>Events {locale}</h1>
  )
}