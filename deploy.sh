start_time_one=$(date +%s)
#! /usr/bin/env sh
git pull
git status
git add .
git commit . -m "update"
git push -u origin main
# git push -u githubcopy main
# yarn run docs:build
pnpm run docs:build

end_time_one=$(date +%s)
run_time_one=$((end_time_one - start_time_one))
start_time_two=$(date +%s)

echo "VuePress站点构建完成。"

# 2. 将构建好的dist目录复制到目标位置
# echo "开始复制dist目录到指定位置..."
# cp -r docs/.vuepress/dist /Users/huangjiabao/GitHub/WebSite/AndersonHJB.github.io

# echo "复制完成。"
set -e
cd src/.vuepress/dist
# git push -f vuepress@121.89.218.11:/var/www/html.git main
echo "已成功进入目录打包...正在进行打包"
7z a ../zip/dist.zip ./
echo "已经成功打包"
echo "***** 上传中 *****"
# scp -v -r ../zip/dist.zip root@121.89.218.11:/var/www/html
scp -v -i ~/.ssh/id_rsa_aiyc -r ../zip/dist.zip root@154.37.212.50:/www/wwwroot/bloggersht.com.cn/
echo "***** 成功上传 *****"
rm -rf ../zip/dist.zip
echo "***** 进入服务器，触发远端程序 *****"
# ssh root@121.89.218.11 "sh /bash/autounzip.sh"
ssh root@154.37.212.50 "sh /bash/autounzip.sh"
echo "***** 传输完毕*****"
end_time_two=$(date +%s)
run_time_total=$((end_time_two - start_time_one))
deploy_time=$((end_time_two - start_time_two))
echo "网站构建时间: $run_time_one 秒"
echo "网站部署时间: $deploy_time 秒"
echo "脚本运行总时间: $run_time_total 秒"