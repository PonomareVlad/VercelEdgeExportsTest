import {getUsedField} from "exports-test-wintercg"
import {getEnvironmentDetails} from "exports-test-wintercg/env"

export const config = {runtime: "edge"}

export default async () => new Response(JSON.stringify({
    used: getUsedField(),
    details: getEnvironmentDetails(),
}))
