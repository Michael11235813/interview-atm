# Interview

## Scenario

You are a backend developer at bank.
To stay competitive the bank asks you to implement a cool new feature which allows users to change their PIN.
The bank plans to run a big marketing campaign to advertise this new functionality.

## Requirements

The marketing guy Dominik tells you the following:

- Ensure the new PIN is no digit series. E.g. `1234`, `5678`, etc.
- The new PIN is different from the old pin
- _Optional_: The new PIN is only composed of digits which are not present in the old pin.
  | Old Pin | New Pin | OK? |
  | - | - | - |
  | 4390 | 2784 | 🚫 |
  | 4390 | 1872 | ✅ |

When the PIN satisfies the requirements write the new PIN to the database.
