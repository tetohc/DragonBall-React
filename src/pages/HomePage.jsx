import { useNavigate } from "react-router-dom";

export const HomePage = () => {

  const navigate = useNavigate();
  const onEnter = () => {
    navigate('/zfighter', { replace: true });
  }

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(public/images/ultra_instinct_goku.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Dragon Ball App</h1>
            <p className="mb-5">
              Explora el universo de Dragon Ball y descubre tus personajes favoritos.
            </p>
            <button className="btn btn-primary" onClick={onEnter}>Continuar</button>
          </div>
        </div>
      </div>
    </>
  );
};
