npm run build &&
cd build &&
git init &&
git add . &&
git commit -m "Deploy" &&
git remote add origin git@github.com:Orange-ice/picture-bed.git &&
git push -f origin master:gh-pages &&
cd - &&
rm -rf build &&
echo "Deployed" &&
exit 0
