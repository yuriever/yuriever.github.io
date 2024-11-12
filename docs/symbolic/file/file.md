# File operations

## File name operations

<center>

|               | a/b/c     | a/b/c.txt     |
| :------------ | :-------- | :------------ |
| FileNameSplit | {a, b, c} | {a, b, c.txt} |
| FileBaseName  | c         | c             |
| FileExtension |           | txt           |
| FileNameTake  | c         | c.txt         |
| FileNameDrop  | a/b       | a/b           |
| DirectoryName | a/b/      | a/b/          |

</center>

`#!wl FileNameSplit[file_]` - split the file path into a list of path elements.

`#!wl FileBaseName[file_]` - return the file name.

`#!wl FileExtension[file_]` - return the file extension.

`#!wl FileNameTake|FileNameDrop[file_]` - `#!wl Take|Drop` for file path.

`#!wl DirectoryName[file_]` - return the directory path.

---

`#!wl FileNameJoin[list_]` - join the list of path elements into a file path according to the operating system.

## File operations

<center>

|                 | a/b/c                    | a/b/c.txt                    | /Downloads/test/sub1 | /Downloads/test/sub1/file1.txt                    |
| :-------------- | :----------------------- | :--------------------------- | :------------------- | :------------------------------------------------ |
| FileExistsQ     | False                    | False                        | True                 | True                                              |
| FileType        | None                     | None                         | Directory            | File                                              |
| FileFormat      | $Failed                  | $Failed                      | Directory            | Text                                              |
| DirectoryQ      | False                    | False                        | True                 | False                                             |
| ParentDirectory | ParentDirectory["a/b/c"] | ParentDirectory["a/b/c.txt"] | /Downloads/test      | ParentDirectory["/Downloads/test/sub1/file1.txt"] |

</center>

`#!wl FileExistsQ[file_]` - test whether a file exists.

`#!wl FileType[file_]` - return `#!wl File|Directory` or `#!wl None` if the file does not exist.

`#!wl FileFormat[file_]` - try to return the file type.

`#!wl DirectoryQ[file_]` - return `#!wl True` if the input is an existing directory, and return `#!wl False` if the input is not a directory or the directory does not exist.

`#!wl ParentDirectory[dir_]` - check existence of the directory and and return the parent directory.

---

`#!wl CreateFile|DeleteFile|CopyFile|RenameFile[file_]`

`#!wl CreateDirectory|DeleteDirectory|CopyDirectory|RenameDirectory[dir_]`

`#!wl FileNames[forms_,dirs_,depth_]` - return a list of file paths in the directories.

`#!wl FileSystemMap|FileSystemScan[f_,dir_]` - `#!wl Map|Scan` for files.

`#!wl FileSystemTree[dir_]` - return the file tree.

## Directories

`#!wl NotebookDirectory[]` - current notebook directory.

`#!wl $HomeDirectory` - home directory.

`#!wl $TemporaryDirectory` - system temporary directory.

`#!wl $UserBaseDirectory` - directory for user-specific add-on files.

`#!wl $UserBasePacletsDirectory` - directory for user-specific paclet files.

`#!wl $Path` - the list of directories to find an external file.

---

`#!wl Directory[]` - return the working directory.

`#!wl SetDirectory[dir_]` - set the working directory.

`#!wl ResetDirectory[]` - revert to the previous working directory.
