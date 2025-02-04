export const EmptyList = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-start vh-100 text-center p-4">
      <div className="bg-light border border-dark rounded p-4 mt-5 shadow-sm">
        <h4 className="mb-3 text-dark">No existen coincidencias</h4>
        <p className="text-secondary">Intenta con otra búsqueda</p>
      </div>
    </div>
  );
};
