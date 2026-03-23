export const Disqualified = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-muted-foreground mb-6">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-4">No somos el fit adecuado.</h2>
      <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
        Gracias por tu tiempo. Basados en tus respuestas, actualmente no podemos garantizarte resultados con nuestro sistema.
        Trabajamos exclusivamente con proyectos que cumplen parámetros muy específicos de inventario y capacidad para implementar.
        <br /><br />
        Te deseamos mucho éxito en el desarrollo de tu proyecto inmobiliario.
      </p>
    </div>
  );
};
