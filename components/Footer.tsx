export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <span className="text-white font-semibold">Abogados Familia</span>
          </div>

          <p className="text-blue-300 text-sm text-center">
            &copy; {currentYear} Abogados Familia. Todos los derechos
            reservados.
          </p>

          <p className="text-blue-400 text-xs text-center max-w-md">
            La información contenida en este sitio es de carácter general y no
            constituye asesoría legal específica.
          </p>
        </div>
      </div>
    </footer>
  );
}
