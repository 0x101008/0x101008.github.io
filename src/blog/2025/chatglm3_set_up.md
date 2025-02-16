---
title: ChatGLM3-6B本地部署
icon: #
date: 2025-01-01 00:00:00
author: sht
isOriginal: true
category: 
    - AI
tag:
    - AI
sticky: false
star: false
article: true
timeline: true
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

1. Windows WSL 安装

2. 检查

   ```
   nvidia-smi
   nvcc --version
   ```

   是否能成功运行

3. 运行命令

```python
sudo apt update
sudo apt install cuda-12-6
vim ～/.bashrc
i
export PATH=/usr/local/cuda-12.6/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/cuda-12.6/lib64:$LD_LIBRARY_PATH
esc
:wq
source ～/.bashrc
```

4。抓取仓库

[GitHub - THUDM/ChatGLM3: ChatGLM3 series: Open Bilingual Chat LLMs | 开源双语对话语言模型](https://github.com/THUDM/ChatGLM3)

```python
git clone git@github.com:THUDM/ChatGLM3.git
```

5.创建虚拟环境

```python
python3 -m venv .venv
source .venv/bin/activate
```

6.安装依赖

```
pip install -r requirements.txt
```

#### 注意：

需要提前装好pytorch([Start Locally | PyTorch](https://pytorch.org/get-started/locally/))根据自己的配置选择对应的选项复制命令运行即可

7. 