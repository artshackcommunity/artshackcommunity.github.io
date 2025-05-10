set -eu
exec 2>/dev/null

export SAVE_ARTSHACK_MISSION_FORM_ID="251286346098162"

jotform_response=$(curl -H "APIKEY: ${JOTFORM_API_KEY}" -X GET "https://api.jotform.com/form/${SAVE_ARTSHACK_MISSION_FORM_ID}/submissions?limit=1000")

response_code=$(echo "$jotform_response" | jq -r '.responseCode')
if [ "$response_code" -ne 200 ]; then
  echo "Error: API response code is $response_code"
  exit 1
fi

echo "$jotform_response" > "submissions.json"

jq '[.content[].answers | {
  name: (map(select(.name == "name") | .prettyFormat) | first),
  reason: (map(select(.name == "whyIs") | .answer) | first),
  role: (map(select(.name == "whatIs") | .prettyFormat) | first)
}]' submissions.json > public/signatures.json
