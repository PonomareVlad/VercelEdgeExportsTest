import {getUsedField} from "exports-test"
import {getEnvironmentDetails} from "exports-test/env"

export const config = {runtime: "edge"}

export default async () => new Response(JSON.stringify({
    used: getUsedField(),
    details: getEnvironmentDetails(),
}))
