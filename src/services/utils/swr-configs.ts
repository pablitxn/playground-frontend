// @ts-ignore

export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const responseFormatter = (response) => {
  const { error, data } = response
  if (response) {
    return {
      error: error,
      loading: !error && !data,
      data: data
    }
  }
}

