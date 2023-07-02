---
sidebar_position: 2
last_update:
  date: 2023/03/24
title: git
description: git
keywords: [git]
---

# git

- `git add --help`：查看 git 的說明
- `git reflog`：查看歷史紀錄的版本變化（就算該 branch 被刪除，該 branch 的檔案內容也會被列出來）
  - 當 branch 被誤刪的時候，可以使用 `git reflog` 來找到該 branch 中的 commit，然後在 `git checkout` 到該 commit 後建立 branch 就可以恢復被刪除的 branch
- `git rebase` 及 `git merge` 差別在於 rebase 會修改歷史紀錄，相同修改的地方會被合併，優點是可以好好整理 commit；而 merge 則會保留這些歷史紀錄，相對於 rebase 的歷史紀錄可能會比較瑣碎
- `git stash save --keep-index -u`：僅暫存 unstage 的檔案，且包含未追蹤的檔案（新增的檔案）

### 參考資料

- [What does each of the [y,n,q,a,d,/,K,j,J,g,e,?] stand for in context of git -p](https://stackoverflow.com/questions/10605405/what-does-each-of-the-y-n-q-a-d-k-j-j-g-e-stand-for-in-context-of-git-p)
- [30 天精通 Git 版本控管 (16)：善用版本日誌 git reflog 追蹤變更軌跡](https://ithelp.ithome.com.tw/articles/10138150)
- [GIT 分支](https://kingofamani.gitbooks.io/git-teach/content/chapter_3_branch/git.html)
- [Git | 我以為的 Git Rebase 與和 Git Merge 做合併分支的差異](https://medium.com/starbugs/git-%E6%88%91%E4%BB%A5%E7%82%BA%E7%9A%84-git-rebase-%E8%88%87%E5%92%8C-git-merge-%E5%81%9A%E5%90%88%E4%BD%B5%E5%88%86%E6%94%AF%E7%9A%84%E5%B7%AE%E7%95%B0-cacd3f45294d)
- [How can I stash only staged changes in Git?](https://stackoverflow.com/questions/14759748/how-can-i-stash-only-staged-changes-in-git)
