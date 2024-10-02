export default function Footer() {
  return (
    <section className="flex w-full justify-between px-4 py-3">
      <aside className="flex items-center">
        <p className="text-[13px] leading-5 text-muted-foreground">
          Provided by the{' '}
          <a
            href="https://worldassociation.org"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            World Association
          </a>
          .
        </p>
      </aside>
      <a
        href="https://github.com/worldassociation/global-basic-income"
        target="_blank"
        rel="noreferrer"
        className="text-[13px] font-medium leading-5 text-muted-foreground"
      >
        GitHub
      </a>
    </section>
  );
}
