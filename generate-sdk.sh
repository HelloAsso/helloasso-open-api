openapi-generator generate -i helloasso.json -g php -o ../helloasso-php
openapi-generator generate -i helloasso.json -g javascript -o ../helloasso-node
openapi-generator generate -i helloasso.json -g python -o ../helloasso-python --additional-properties=packageName=helloasso-python