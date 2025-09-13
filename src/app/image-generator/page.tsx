import ImageGenerator from './image-generator-form';

export default function ImageGeneratorPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
            AI Image Generator
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Describe the image you want to create. Let your imagination run wild!
          </p>
        </div>
        <ImageGenerator />
      </div>
    </div>
  );
}
