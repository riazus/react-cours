import Wrapper from "./Wrapper";

const Cars = ({ children, color }) => {
  return children ? (
    <Wrapper >
      <p>Marque: {children}</p>
      <p>Coleur: {color ?? "neaent"}</p>
    </Wrapper>
  ) : (
    <p>Pas de data</p>
  );
};

export default Cars;
