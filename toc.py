import re

def generate_toc(md_content):
    lines = md_content.split('\n')
    toc = []
    for line in lines:
        match = re.match(r'^(#{1,6})\s+(.+)', line)
        if match:
            level = len(match.group(1))
            title = match.group(2).strip()
            anchor = title.lower().replace(' ', '-').replace('.', '')
            indent = '  ' * (level - 1)
            toc.append(f"{indent}- [{title}](#{anchor})")
    return '\n'.join(toc)

# 示例输入
sample_md = """

"""

print(generate_toc(sample_md))
