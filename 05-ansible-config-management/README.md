# Ansible Config Management

Provision Nginx web servers with a single playbook.

## Usage

```
cd ansible
cp inventory.example inventory
ansible-galaxy collection install ansible.posix community.general
ansible-playbook -i inventory playbooks/site.yml
```

## Role behavior

- Installs nginx via apt
- Deploys `index.html` from a template
- Enables and restarts nginx when templates change

## CI

`.github/workflows/ci.yml` runs `ansible-lint` and a syntax check to make sure changes remain safe to apply.
