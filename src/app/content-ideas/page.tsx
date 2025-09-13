import ContentGenerator from './content-generator';

export default function ContentIdeasPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
            AI-Powered Content Ideas
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Boost your online presence with engaging content. Let our AI help
            you brainstorm ideas for your blog and social media.
          </p>
        </div>
        <ContentGenerator />
      </div>
    </div>
  );
}
