interface Response {
  token: string;
  user: {
    name: string;
  }
}

export function authService(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: "123456789",
        user: {
          name: "tsuy"
        }
      })
    }, 2000);
  });
}