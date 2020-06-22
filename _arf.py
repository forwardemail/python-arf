#!/usr/bin/env python

import json
import sys
import arf

# message = arf.ARFMessage(sys.argv[1]).serialize_report_to_json()

load = arf.load_arf(sys.argv[1])
message = load.serialize_report_to_json()
message = json.loads(message)
message['OriginalMessagePayload'] = load.get_original_message_payload()
print(json.dumps(message))
