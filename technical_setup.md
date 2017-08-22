# Course23 technical setup

setting up DNS, hosting on S3, etc

## DNS

- go to AWS Route53
- "create hosted zone".  enter domain name.  public hosted zone.
- press "Create"
- on next page there will be NS records.  note these.
- Godaddy:  go to domain name, set "custom" name servers
- Godaddy:  enter each of the NS record domain names in the nameserver area
- Godaddy:  press save when all are entered
- Godaddy says you may have to wait a bit.  refresh the web page.  if the Records part says they can't display DNS because it isn't managed by them then it is pointing to AWS.

- setup S3 bucket to host domain.  goto S3
- create S3 bucket named the domain name you chose
- enable logging (must have bucket available to receive logs.  logs prefixed with domain name)
- don't enable public access.
- do add bucket policy that looks like this:

    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AddPerm",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::course23.com/*"
            }
        ]
    }

- back under propeties, enable Static Website Hosting
  - choose "use this bucket to host a website" and enter name of index file.  typically index.html.  press save
- back at Route53, create a "Record Set"
- this will be a blank A record to host the domain.  choose "yes" for alias.  click in Alias Target and wait for S3 website endpoints to populate with the static site you just created in S3.  choose it.
- click save stuff
- upload a boring index.html to the root of the domain bucket (course23.com in this case).  set public read access.
- browse to the domain, you should see your boring index.html.
- done.  repeat S3 and Route53 part after GoDaddy part above
