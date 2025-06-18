const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/indabax/"
    : "";
};

export { getImagePrefix };
 
