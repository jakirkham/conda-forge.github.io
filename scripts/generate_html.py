#!/usr/bin/env conda-execute

# conda execute
# env:
#  - python
#  - conda 4.1.*
#  - conda-env 2.5.*
#  - conda-build 1.*
#  - conda-smithy
# channels:
#  - conda-forge
# run_with: python

import os

import conda_smithy.feedstocks as feedstocks

from jinja2 import Environment, FileSystemLoader

import argparse


# Needs permissions: public_repo, read:org

parser = argparse.ArgumentParser(description='Generate the conda-forge html.')
parser.add_argument('--html-source', help="The location of the conda-forge.github.io checkout.",
                   default=os.path.abspath(os.path.dirname(os.path.dirname(__file__))))

args = parser.parse_args()

html_source = args.html_source
loader = FileSystemLoader(html_source)
env = Environment(loader=loader)

context = {}
context['gh_feedstocks'] = feedstocks.feedstock_repos('conda-forge')


tmpl = env.get_template('feedstocks.html.tmpl')
with open(os.path.join(html_source, 'feedstocks.html'), 'w') as fh:
    fh.write(tmpl.render(context))
