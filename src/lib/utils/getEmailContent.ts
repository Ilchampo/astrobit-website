export const getInterestLabel = (interest: string) => {
	const labels: Record<string, string> = {
		web: 'Web Application',
		landing: 'Landing Page',
		chatbot: 'Chatbot',
		unsure: "I'm not sure yet",
	};
	return labels[interest] ?? interest;
};

export const getContactEmailContent = (
	name: string,
	email: string,
	company: string,
	interest: string,
	message: string,
	submittedAt: Date,
) => `
    <!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>New Contact Form Submission - Astrobit</title>
		</head>
		<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif;">
			<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0F1629; color: #FFFFFF; border-radius: 8px; overflow: hidden;">
				<!-- Header -->
				<div style="background: linear-gradient(135deg, #2A3A8F 0%, #1E0B4B 100%); padding: 30px 20px; text-align: center; border-bottom: 1px solid #3D4BB4;">
					<h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #FFFFFF; text-shadow: 0 0 10px rgba(120, 149, 255, 0.6);">
						New Contact Form Submission
					</h1>
					<div style="width: 60px; height: 4px; background: linear-gradient(90deg, #5A67F2 0%, #B146FF 100%); margin: 15px auto; border-radius: 2px;"></div>
					<p style="margin: 10px 0 0; font-size: 16px; color: #B8C3FF;">
						Someone reached out through Astrobit
					</p>
				</div>
				
				<!-- Content -->
				<div style="padding: 30px 25px; background-color: #131A36;">
					<!-- User Info Section -->
					<table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
						<tr>
							<td style="padding: 12px 15px; background-color: #1A2140; border-radius: 6px 6px 0 0; border-bottom: 1px solid #2A3366; font-size: 18px; font-weight: 600; color: #7C8DFF;" colspan="2">
								Contact Information
							</td>
						</tr>
						<tr>
							<td style="padding: 12px 15px; background-color: #1D2545; border-bottom: 1px solid #2A3366; width: 140px; font-weight: 600; color: #A2ADFF;">
								Name
							</td>
							<td style="padding: 12px 15px; background-color: #1D2545; border-bottom: 1px solid #2A3366; color: #FFFFFF;">
								${name}
							</td>
						</tr>
						<tr>
							<td style="padding: 12px 15px; background-color: #1D2545; border-bottom: 1px solid #2A3366; font-weight: 600; color: #A2ADFF;">
								Email
							</td>
							<td style="padding: 12px 15px; background-color: #1D2545; border-bottom: 1px solid #2A3366; color: #FFFFFF;">
								<a href="mailto:${email}" style="color: #7C8DFF; text-decoration: none;">${email}</a>
							</td>
						</tr>
						${
							company
								? `
						<tr>
							<td style="padding: 12px 15px; background-color: #1D2545; border-bottom: 1px solid #2A3366; font-weight: 600; color: #A2ADFF;">
								Company
							</td>
							<td style="padding: 12px 15px; background-color: #1D2545; border-bottom: 1px solid #2A3366; color: #FFFFFF;">
								${company}
							</td>
						</tr>
						`
								: ''
						}
						${
							interest
								? `
						<tr>
							<td style="padding: 12px 15px; background-color: #1D2545; border-bottom: 1px solid #2A3366; font-weight: 600; color: #A2ADFF;">
								Interest
							</td>
							<td style="padding: 12px 15px; background-color: #1D2545; border-bottom: 1px solid #2A3366; color: #FFFFFF;">
								${getInterestLabel(interest)}
							</td>
						</tr>
						`
								: ''
						}
						<tr>
							<td style="padding: 12px 15px; background-color: #1D2545; border-bottom: 1px solid #2A3366; font-weight: 600; color: #A2ADFF;">
								Submitted At
							</td>
							<td style="padding: 12px 15px; background-color: #1D2545; border-bottom: 1px solid #2A3366; color: #FFFFFF;">
								${submittedAt.toLocaleString('en-US', {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric',
									hour: '2-digit',
									minute: '2-digit',
									timeZoneName: 'short',
								})}
							</td>
						</tr>
					</table>
					
					<!-- Message Section -->
					<table style="width: 100%; border-collapse: collapse;">
						<tr>
							<td style="padding: 12px 15px; background-color: #1A2140; border-radius: 6px 6px 0 0; border-bottom: 1px solid #2A3366; font-size: 18px; font-weight: 600; color: #7C8DFF;">
								Message
							</td>
						</tr>
						<tr>
							<td style="padding: 15px; background-color: #1D2545; border-radius: 0 0 6px 6px; color: #FFFFFF; line-height: 1.6; white-space: pre-wrap;">
								${message}
							</td>
						</tr>
					</table>
				</div>
				
				<!-- Footer -->
				<div style="background: linear-gradient(135deg, #1E0B4B 0%, #2A3A8F 100%); padding: 20px; text-align: center; border-top: 1px solid #3D4BB4;">
					<p style="margin: 0; font-size: 14px; color: #A2ADFF;">
						© ${new Date().getFullYear()} Astrobit. All rights reserved.
					</p>
					<p style="margin: 10px 0 0; font-size: 12px; color: #8491E0;">
						This email was sent from the Astrobit website contact form.
					</p>
				</div>
			</div>
		</body>
		</html>
    `;
