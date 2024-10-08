$ErrorActionPreference = 'SilentlyContinue'

rm -recurse -force .\node_modules\
cd shared
rm -recurse -force .\node_modules\
rm -recurse -force .\dist\
cd ../app
rm -recurse -force .\node_modules\
rm -recurse -force .\dist\
cd ..