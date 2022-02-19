export default function Layout({ children }) {
  return (
    <main className="mx-auto h-screen max-h-screen max-w-screen-md">
      <div className="flex h-full w-full items-center justify-center">{children}</div>
    </main>
  )
}
