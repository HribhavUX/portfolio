import client from "@sanity/client"

export default client({
  projectId: "d25hw29d",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-09-26",
})