export const domain =
  process.env.NODE_ENV === "development"
    ? {
        // VSCode上
        backendHost: "http://localhost:8080/v1",
      }
    : {
        // クラウド環境
        backendHost: "https://backend.空詩ぷるむ語録(仮)oke.com/v1",
      };
