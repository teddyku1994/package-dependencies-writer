#!/bin/sh 

GEN_DOC_SCRIPT="$(node -e "require('./license-doc-generator.js').run('$1', '$2', '$3')")"
echo ${GEN_DOC_SCRIPT}