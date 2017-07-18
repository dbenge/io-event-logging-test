npm install

7z a -tzip action.zip -r *

wsk action update dbenge.io-event-logging-test.master_io-event-log --kind nodejs:default action.zip
